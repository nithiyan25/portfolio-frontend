import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import portfolioAPI from '../api/portfolioService';

function Contact() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const data = await portfolioAPI.fetchProfile();
    if (data) setProfile(data);
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: profile?.email || 'email@example.com',
      link: profile?.email ? `mailto:${profile.email}` : null
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: profile?.phone || '+91 1234567890',
      link: profile?.phone ? `tel:${profile.phone}` : null
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: profile?.location || 'Trichy, Tamil Nadu, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: profile?.github_url || 'https://github.com/url',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: profile?.linkedin_url || 'https://linkedin.com/in/url',
      color: 'hover:text-blue-400'
    }
  ];

  if (loading) {
    return (
      <div className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="text-2xl text-purple-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you. 
            Fill out the form below or reach out through any of the contact methods.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-purple-400">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-semibold text-white hover:text-purple-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-700 rounded-full transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-3">Availability</h3>
              <p className="text-gray-300">
                I'm currently available for freelance work and interesting project collaborations. 
                Feel free to reach out, and I'll get back to you within 24-48 hours.
              </p>
            </div>

            {/* Fun Fact */}
            <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-3">💡 Fun Fact</h3>
              <p className="text-gray-300">
                I typically respond faster if you mention coffee or an interesting tech challenge in your message! ☕
              </p>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4">Prefer Email?</h3>
          <p className="text-gray-300 mb-6">
            You can also send me an email directly at
          </p>
          <a
            href={`mailto:${profile?.email || 'your.email@example.com'}`}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            {profile?.email || 'email@example.com'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;