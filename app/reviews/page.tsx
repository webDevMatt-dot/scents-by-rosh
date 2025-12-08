"use client";

import React, { useState, useEffect } from "react";

// Initial Mock Data (Fallback)
const INITIAL_REVIEWS = [
  { id: 1, name: "Sarah J.", role: "Verified Buyer", rating: 5, date: "2 days ago", title: "Smells expensive!", content: "I was skeptical about purchasing perfume online, but Bella smells exactly like Baccarat Rouge. The scent lasts all day and I get so many compliments." },
  { id: 2, name: "Michael T.", role: "Verified Buyer", rating: 5, date: "1 week ago", title: "My new signature", content: "Executive is incredible. It’s bold, masculine, and lasts through my entire workday. Will definitely be ordering the full size." },
  { id: 3, name: "Elena R.", role: "Verified Buyer", rating: 4, date: "2 weeks ago", title: "Lovely packaging", content: "The packaging feels so luxurious. The scent is a bit sweeter than I expected but it settles nicely after an hour." },
  { id: 4, name: "David K.", role: "Verified Buyer", rating: 5, date: "3 weeks ago", title: "Better than the original", content: "I actually prefer Alpha King over Sauvage. It feels smoother and less harsh on the opening. Great job Rosh!" },
  { id: 5, name: "Jessica M.", role: "Verified Buyer", rating: 5, date: "1 month ago", title: "Obsessed", content: "I bought the sample pack first and fell in love with Rosh Bloom. Just bought the big bottle. Shipping was super fast too." },
  { id: 6, name: "Priya S.", role: "Verified Buyer", rating: 5, date: "1 month ago", title: "Golden Aura indeed", content: "Such a classy, timeless scent. I wear it to every evening event now." },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    title: "",
    content: ""
  });

  // Load reviews from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("scents-reviews");
    if (saved) {
      setReviews(JSON.parse(saved));
    }
  }, []);

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const reviewToAdd = {
      id: Date.now(), // unique ID
      name: newReview.name,
      role: "Reviewer", // Default role for new submissions
      rating: newReview.rating,
      date: "Just now",
      title: newReview.title,
      content: newReview.content
    };

    const updatedReviews = [reviewToAdd, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("scents-reviews", JSON.stringify(updatedReviews)); // Persist
    
    // Reset and Close
    setNewReview({ name: "", rating: 5, title: "", content: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#c9a449] selection:text-black">
      
      {/* Header */}
      <div className="pt-32 pb-12 px-6 text-center">
        <p className="text-[#c9a449] text-xs tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Community Love
        </p>
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 animate-fade-in-up">
          Client Reviews
        </h1>
        <div className="flex items-center justify-center gap-4 animate-fade-in-up delay-100">
           <div className="flex text-[#c9a449]">
             {[1,2,3,4,5].map(i => <span key={i} className="text-xl">★</span>)}
           </div>
           <span className="text-gray-400 text-sm">4.9/5 Average Rating</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div 
              key={review.id} 
              className="bg-[#0a0a0a] border border-[#222] p-8 rounded-sm hover:border-[#c9a449]/30 transition-colors animate-fade-in-up"
              style={{ animationDelay: `${Math.min(idx * 50, 500)}ms` }} // Cap delay for large lists
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex text-[#c9a449] text-sm gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => <span key={i}>★</span>)}
                </div>
                <span className="text-gray-600 text-xs">{review.date}</span>
              </div>
              
              <h3 className="text-white font-serif text-lg mb-3">{review.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                "{review.content}"
              </p>

              <div className="flex items-center gap-3 border-t border-[#222] pt-4">
                <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#c9a449] font-bold text-xs uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-xs font-bold">{review.name}</p>
                  <p className="text-[#c9a449] text-[10px] uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 pt-12 border-t border-[#222]">
          <h3 className="font-serif text-2xl text-white mb-4">Have you tried our scents?</h3>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-transparent border border-[#333] text-white px-8 py-3 rounded-sm font-bold tracking-widest text-xs uppercase hover:border-[#c9a449] hover:text-[#c9a449] transition-all"
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* --- WRITE REVIEW MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-[#0a0a0a] border border-[#222] w-full max-w-lg p-8 md:p-10 rounded-sm shadow-2xl animate-fade-in-up">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>

            <h2 className="text-2xl font-serif text-white mb-2 text-center">Write a Review</h2>
            <p className="text-gray-400 text-sm text-center mb-8">Share your experience with Scents by Rosh</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Star Rating Selector */}
              <div className="flex flex-col items-center mb-6">
                <label className="text-[#c9a449] text-[10px] uppercase tracking-widest mb-2">Your Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className={`text-2xl transition-transform hover:scale-110 ${
                        star <= newReview.rating ? "text-[#c9a449]" : "text-gray-700"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="group">
                <label className="block text-[#c9a449] text-[10px] uppercase tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  required 
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                  className="w-full bg-black border border-[#333] py-3 px-4 text-white focus:outline-none focus:border-[#c9a449] transition-colors placeholder-gray-700"
                  placeholder="Your name" 
                />
              </div>

              <div className="group">
                <label className="block text-[#c9a449] text-[10px] uppercase tracking-widest mb-2">Review Title</label>
                <input 
                  type="text" 
                  required 
                  value={newReview.title}
                  onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                  className="w-full bg-black border border-[#333] py-3 px-4 text-white focus:outline-none focus:border-[#c9a449] transition-colors placeholder-gray-700"
                  placeholder="Summarize your experience" 
                />
              </div>

              <div className="group">
                <label className="block text-[#c9a449] text-[10px] uppercase tracking-widest mb-2">Review</label>
                <textarea 
                  required 
                  rows={4}
                  value={newReview.content}
                  onChange={(e) => setNewReview({...newReview, content: e.target.value})}
                  className="w-full bg-black border border-[#333] py-3 px-4 text-white focus:outline-none focus:border-[#c9a449] transition-colors placeholder-gray-700 resize-none"
                  placeholder="Tell us what you liked..." 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#c9a449] text-black font-bold tracking-[0.2em] text-xs uppercase py-4 hover:bg-[#b08d3b] transition-colors"
              >
                Submit Review
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}