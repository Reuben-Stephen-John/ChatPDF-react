import React, { useState, useRef, useEffect, useContext } from 'react';
import ChatMessage from './ChatMessage';
import { ChatContext } from '../context/chatContext';
import Thinking from './Thinking';
import { MdSend } from 'react-icons/md';
import Filter from 'bad-words';
import rapidapi from '../utils/rapidapi';
import Modal from './Modal';
import Setting from './Setting';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';



pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


const ChatView = () => {
  const messagesEndRef = useRef();
  const inputRef = useRef();
  const fileInputRef = useRef();
  const [formValue, setFormValue] = useState('');
  const [thinking, setThinking] = useState(false);
  const options = ['FACT-CHECK', 'SEGMENTING', 'JUDGEMENT'];
  const [selected, setSelected] = useState(options[0]);
  const [messages, addMessage] = useContext(ChatContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfText,setPdfText]=useState("");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePDFLoadSuccess = async (pdf) => {
    const words = [];
  
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const pageText = await page.getTextContent();
  
      pageText.items.forEach((item) => {
        const word = item.str;
        // Split the word into individual words by whitespace
        const wordArray = word.split(/\s+/);
  
        // Add individual words to the words array
        words.push(...wordArray);
      });
    }
  
    // Merge all the words into one big paragraph
    const paragraph = words.join(' ');
    setPdfText(paragraph);
  
    // `paragraph` now contains the text content of the PDF as one big paragraph
    console.log(paragraph);
  
    // You can store or process this paragraph as needed
  };
  
  


  const onFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file); // Debug
    setPdfFile(file);
  };

  const updateMessage = (newValue, ai = false, selected) => {
    const id = Date.now() + Math.floor(Math.random() * 1000000);
    const newMsg = {
      id: id,
      createdAt: Date.now(),
      text: newValue,
      ai: ai,
      selected: `${selected}`,
    };

    addMessage(newMsg);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    const filter = new Filter();
    const cleanPrompt = filter.isProfane(formValue)
      ? filter.clean(formValue)
      : formValue;

    const newMsg = cleanPrompt;
    const aiModel = selected;

    setFormValue('');
    setThinking(true);
    updateMessage(newMsg, false, aiModel);
    const aiGeneratedMessages = messages
    .filter((message) => message.ai === true)
    .map((message) => message.text)
    .join(', ');

    try {
      const response = await rapidapi(pdfText,cleanPrompt,aiGeneratedMessages);
      //const data = response.text;
      const data = response.data;
      data && updateMessage(data, true, aiModel);
    } catch (err) {
      const data =
        "Connect required API to get appropriate responses";
      updateMessage(data, true, aiModel);
    }
    setThinking(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();

      if (formValue.trim() !== '') {
        sendMessage(e);
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, thinking]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="chatview">
      <main className="chatview__chatarea">
      {pdfFile && (
          <div className="pdf-preview">
            <Document file={pdfFile} onLoadSuccess={handlePDFLoadSuccess}>
              <Page pageNumber={1} />
            </Document>
          </div>
        )}
        {messages.map((message, index) => (
          <ChatMessage key={index} message={{ ...message }} />
        ))}

        {thinking && <Thinking />}
        <span ref={messagesEndRef}></span>
      </main>
      <form className="form" onSubmit={sendMessage}>
        <div className="file-input">
          <input
            type="file"
            accept=".pdf"
            onChange={onFileChange}
            ref={fileInputRef}
          />
          <button
            onClick={() => fileInputRef.current.click()}
            className="file-input-button"
          >
            Upload PDF
          </button>
          {pdfFile && pdfFile.name && (
            <div className="file-name">{pdfFile.name}</div>
          )}
        </div>
        <div className="flex items-stretch justify-between w-full">
          <textarea
            ref={inputRef}
            className="chatview__textarea-message"
            value={formValue}
            onKeyDown={handleKeyDown}
            placeholder="Enter your prompt here..."
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button
            type="submit"
            className="chatview__btn-send"
            disabled={!formValue}
          >
            <MdSend size={30} />
          </button>
        </div>
      </form>
      <Modal title="Setting" modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal>
    </div>
  );
};

export default ChatView;
