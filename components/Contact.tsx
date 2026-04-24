import { Mail, Phone, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 py-12 text-white border-t border-orange-500/20 rounded-3xl">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-2 text-orange-500 mb-4">
              <MessageSquare size={20} />
              <span className="uppercase tracking-widest text-sm font-bold">Get In Touch</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Technology?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Whether you need urgent IT support in Surrey or a new business website in Langley, 
              we are here to help. Reach out for a <span className="text-white font-semibold">free consultation</span>.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:erandairushan98@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-orange-500 transition-all group"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Mail size={24} className="text-orange-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Email Us</p>
                  <p className="text-white font-medium">erandairushan98@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+12368635178"
                className="flex items-center gap-4 p-4 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-orange-500 transition-all group"
              >
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Phone size={24} className="text-orange-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Call or Text</p>
                  <p className="text-white font-medium">+1 (236) 863-5178</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="bg-gray-800/30 p-8 rounded-3xl border border-gray-700 backdrop-blur-sm">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject (e.g., Web Design or IT Support)" 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
              />
              <textarea 
                rows={4} 
                placeholder="How can we help your business?" 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}