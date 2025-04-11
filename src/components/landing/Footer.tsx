import { Link } from "react-router-dom";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageSquare,
  Cross,
  X,
  Calendar,
  Link as LinkIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Footer = () => {
  const [sessionId, setSessionId] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "ai" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [isPhoneOptionsOpen, setIsPhoneOptionsOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const togglePhoneOptions = () => {
    setIsPhoneOptionsOpen(!isPhoneOptionsOpen);
  };
  const genAI = new GoogleGenerativeAI(
    "AIzaSyCqLago2Jcj02sW4r4M1LJW0kj73UgSYNw"
  );
  const genSessionAI = new GoogleGenerativeAI(
    "AIzaSyCqLago2Jcj02sW4r4M1LJW0kj73UgSYNw"
  );
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `You are a knowledgeable study abroad consultant at Tiercel Consulting. 

    Your role is to:
    - Provide accurate information about university selection, visa guidance, scholarship opportunities, and post-admission support
    - Answer questions about studying in different countries, focusing on application processes, requirements, and deadlines
    - Offer personalized advice based on students' academic backgrounds, career goals, and financial situations
    - Maintain a friendly, professional, and encouraging tone
    - Your messages should be short very short possible
    - Suggest booking a consultation in a very buisness manner
    - Suggest booking a consultation every way possible
    - Mention Tiercel Consulting's services when relevant (university selection, visa guidance, scholarship support, post-admission counseling, career counseling)
    - Keep responses concise but informative
    - If you don't know something specific, acknowledge it and suggest contacting Tiercel directly
    
    Remember that students are often anxious about studying abroad, so be reassuring while providing realistic expectations. When appropriate, mention that Tiercel Consulting is located in Lahore (237/1-FF CCA, Phase 4 DHA) and can be contacted at +92 321 052 8888 or info@tiercelconsulting.com for personalized assistance.`,
    generationConfig: {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    },
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ],
  });

  const sessionModel = genSessionAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `only respond in json object format so that i can parse your response. no code block just plain text of json object with the fields
     title, description, status, tags, and notes. 
          Only Respond in JSON object format in plain text (no code block)
          Example response: 
          {
            title: '',
            description: '',
            status: '',
            tags: '',
            notes: ''
          }`,
    generationConfig: {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    },
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleKeyDown = (event) => {
    // look for the `Enter` keyCode
    if (event.keyCode === 13 || event.which === 13) {
      handleSendMessage();
    }
  };
  const createSession = async () => {
    try {
      const sId = uuidv4();
      const sessionResponse = await fetch(
        "http://13.239.184.38:6500/sessions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            session_id: sId,
            chat_title: "AI Generated Title",
            description: "AI Generated Description",
            status: "initial",
            tags: "general",
            notes: "none",
          }),
        }
      );

      if (!sessionResponse.ok) {
        throw new Error(`HTTP error! status: ${sessionResponse.status}`);
      }

      const sessionData = await sessionResponse.json();
      setSessionId(sId);
      return sId;
    } catch (error) {
      console.error("Error creating session:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Failed to create session. Please try again.",
          sender: "ai",
        },
      ]);
      setSendingMessage(false);
      throw error;
    }
  };

  const saveMessage = async (message, isBot, sessionId) => {
    try {
      const response = await fetch("http://13.239.184.38:6500/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: isBot ? "AI Agent" : "User",
          message_text: message,
          is_bot: isBot,
          session_id: sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error saving ${isBot ? "AI" : "user"} message:`, error);
      throw error;
    }
  };

  const generateAIResponse = async (message) => {
    try {
      const result = await model.generateContent(message);
      return result.response.text();
    } catch (error) {
      console.error("Error generating content:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Failed to get AI response. Please try again.",
          sender: "ai",
        },
      ]);
      throw error;
    }
  };

  const handleSendMessage = async () => {
    if (!sendingMessage && newMessage.trim() !== "") {
      setSendingMessage(true);
      const message = newMessage;
      setNewMessage("");
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: "user" },
      ]);

      try {
        let currentSessionId = sessionId;
        if (!currentSessionId) {
          currentSessionId = await createSession();
        }

        await saveMessage(message, false, currentSessionId);
        const aiResponse = await generateAIResponse(message);
        await saveMessage(aiResponse, true, currentSessionId);

        setMessages((prevMessages) => [
          ...prevMessages,
          { text: aiResponse, sender: "ai" },
        ]);

        updateSessionSummary(currentSessionId, messages);
      } catch (error) {
        // Errors handled in individual functions
      } finally {
        setSendingMessage(false);
      }
    }
  };

  const updateSessionSummary = async (sessionId, messages) => {
    try {
      // Prepare messages for the AI model
      const chatHistory = messages
        .map((msg) => `${msg.sender}: ${msg.text}`)
        .join("\n");

      const result = await sessionModel.generateContent(
        `Analyze the following chat history and provide a title, description, status, tags, and notes. \n${chatHistory} 
          Only Respond in JSON object format in plain text (no code block)
          Example response: 
          {
            title: '',
            description: '',
            status: '',
            tags: '',
            notes: ''
          }`
      );
      const responseText = result.response.text();

      const jsonData = responseText
        .replace("```json", "")
        .replace("```", "")
        .trim();

      // Verify AI response is JSON and retry if not
      let parsedResponse;
      try {
        parsedResponse = JSON.parse(jsonData);
      } catch (error) {
        console.error("Failed to parse JSON. Retrying...");
        const retryResult = await sessionModel.generateContent(
          `Analyze the following chat history and provide a title, description, status, tags, and notes. \n${chatHistory} 
          Only Respond in JSON object format in plain text (no code block)
          Example response: 
          {
            title: '',
            description: '',
            status: '',
            tags: '',
            notes: ''
          }
          `
        );
        const retryResponseText = retryResult.response.text();
        const jsonData = retryResponseText
          .replace("```json", "")
          .replace("```", "")
          .trim();
        try {
          parsedResponse = JSON.parse(jsonData);
        } catch (retryError) {
          console.error("Failed to parse JSON after retry. Using fallback.");
          parsedResponse = null;
        }
      }

      if (parsedResponse) {
        // Parse the AI response
        const { chat_title, description, status, tags, notes } = parsedResponse;
        await updateSession(
          sessionId,
          chat_title,
          description,
          status,
          tags,
          notes
        );
      } else {
        // Handle the case where JSON parsing failed even after retry
        console.error("JSON parsing failed. Using fallback values.");
        await updateSession(
          sessionId,
          "Fallback Title",
          "Fallback Description",
          "initial",
          "general",
          "none"
        );
      }
    } catch (error) {
      console.error("Error updating session:", error);
    }
  };

  const updateSession = async (
    sessionId,
    chat_title,
    description,
    status,
    tags,
    notes
  ) => {
    try {
      const response = await fetch(
        `http://13.239.184.38:6500/sessions/${sessionId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_title: chat_title || "AI Generated Title",
            description: description || "AI Generated Description",
            status: status || "initial",
            tags: tags || "general",
            notes: notes || "none",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const sessionData = await response.json();
      console.log("Session updated successfully:", sessionData);
    } catch (error) {
      console.error("Error updating session:", error);
    }
  };

  return (
    <footer className="bg-tiercel-blue text-white">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company */}
          <div>
            <h3 className="font-bold text-2xl mb-6">
              <span className="text-tiercel-red">Tiercel</span> Consulting
            </h3>
            <p className="text-white/70 mb-6">
              Your trusted partner for study abroad guidance, helping students
              achieve their international education dreams.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-tiercel-red transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-tiercel-red transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-tiercel-red transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-tiercel-red transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-tiercel-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#services"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#testimonials"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/consultation"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  Book Consultation
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-tiercel-gold">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  University Selection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  Visa Guidance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  Scholarship Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  Post-Admission Counseling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  Career Counseling
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-1/2 after:bg-tiercel-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-tiercel-red shrink-0 mt-1" />
                <span className="text-white/70">
                  237/1-FF CCA, Phase 4 DHA, Lahore{" "}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-tiercel-red shrink-0" />
                <a
                  href="tel:+923210528888"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  +92 321 052 8888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-tiercel-red shrink-0" />
                <a
                  href="mailto:info@tiercelconsulting.com"
                  className="text-white/70 hover:text-tiercel-red transition-colors"
                >
                  info@tierceledconsulting.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Tiercel Education Consulting.
            Powered by{" "}
            <a
              href="https://www.processjunction.com"
              className="text-white/70 hover:text-tiercel-red transition-colors"
            >
              ProcessJunction Pvt. Ltd
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>

      {/* Live Chat Widget Placeholder */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <button
          className="w-14 h-14 rounded-full bg-tiercel-white text-tiercel-blue flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          onClick={toggleChat}
        >
          <MessageSquare size={24} />
        </button>

        <button
          className="mt-4 w-14 h-14 rounded-full bg-tiercel-blue text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform relative"
          onClick={togglePhoneOptions}
        >
          <Phone size={24} />

          {isPhoneOptionsOpen && (
            <div className="absolute bottom-20 right-0 bg-tiercel-blue rounded-md shadow-lg overflow-hidden">
              <a
                href="https://wa.me/+923210528888"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-40 py-2 px-4 text-left hover:bg-tiercel-red flex items-center"
              >
                <LinkIcon size={24} className="mr-2 text-green-500" /> Chat with
                WhatsApp
              </a>
              <Link
                to="/consultation"
                className="block w-40 py-2 px-4 text-left hover:bg-tiercel-red flex items-center"
              >
                <Calendar size={24} className="mr-2" /> Book an Appointment
              </Link>
            </div>
          )}
        </button>
      </div>

      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-40 bg-tiercel-red text-white rounded-full p-4 shadow-lg hover:bg-red-700 transition-colors"
      >
        {isChatOpen ? (
          <X size={24} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-2 bg-tiercel-blue/90 text-white">
            <h5 className="text-lg font-semibold m-0">AI Assistant</h5>
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-200"
              onClick={toggleChat}
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-4 h-60 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-sm ${
                    message.sender === "user"
                      ? "text-tiercel-blue"
                      : "text-tiercel-red"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-gray-200 flex items-center space-x-2">
            <input
              className="w-4/5 h-10 border border-gray-300 text-black rounded-md p-2 resize-none focus:outline-none focus:ring-2 focus:ring-tiercel-blue text-sm"
              placeholder="Type your message..."
              value={newMessage}
              onKeyDown={handleKeyDown}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="w-1/5 h-10 bg-tiercel-red text-white rounded-md py-1 px-3 hover:bg-red-700 transition-colors"
              onClick={handleSendMessage}
            >
              {sendingMessage ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mx-auto"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 8.107H13.5a.75.75 0 010 1.5H5.029l-2.432 8.107a.75.75 0 00.926.94 48.124 48.124 0 0015.573-8.948.75.75 0 000-1.184A48.092 48.092 0 003.478 2.405z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
