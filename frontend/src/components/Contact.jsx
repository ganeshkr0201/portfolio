import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Sending message...' });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ state: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ state: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Contact error:', error);
      setStatus({ state: 'error', message: 'Failed to connect to the server. Please try again later.' });
    }

    // Auto reset status message after 5 seconds
    setTimeout(() => {
      setStatus({ state: 'idle', message: '' });
    }, 5000);
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ganeshkr0201/', icon: <ExternalLink size={20} /> },
    { name: 'GitHub', url: 'https://github.com/ganeshkr0201/', icon: <ExternalLink size={20} /> }
  ];

  return (
    <section id="contact" className="w-full py-24 px-4 sm:px-6 lg:px-8 relative mb-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start relative z-10">

          {/* Contact Info (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-panel p-8 border border-white/5 bg-white/[0.02] shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll thoughtfully respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-primary/50 text-primary group-hover:scale-110 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-white font-medium text-lg">ganeshkr0201@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-white/5 rounded-full border border-white/10 group-hover:border-neon/50 text-neon group-hover:scale-110 transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-1">Phone</h4>
                    <p className="text-white font-medium text-lg">+91 7484037926</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">Connect Digitally</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-gradient-to-r hover:from-primary/20 hover:to-neon/20 hover:border-primary/20 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <span className="text-gray-500 group-hover:text-white transition-colors">{link.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel p-8 lg:p-10 relative overflow-hidden border border-white/5 bg-white/[0.02] shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      placeholder="Rohit Sharma"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      placeholder="rohitsharma@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon/50 focus:border-transparent transition-all resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                {status.state !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center gap-3 ${status.state === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-400' :
                      status.state === 'error' ? 'bg-red-500/10 border border-red-500/20 text-red-400' :
                        'bg-primary/10 border border-primary/20 text-primary'
                      }`}
                  >
                    {status.state === 'success' ? <CheckCircle size={20} /> :
                      status.state === 'error' ? <AlertCircle size={20} /> :
                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>}
                    <span className="font-medium text-sm">{status.message}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-neon text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  <Send size={20} /> {status.state === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
