import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const VideoShowcaseSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // YouTube video ID for QR code payment demonstration
  // Thai QR Payment system demonstration video
  const videoId = 'Q9fQ82iEI6M';
  const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Video Player Card */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div 
            className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
          >
            {/* Video Thumbnail from YouTube */}
            <img
              src={videoThumbnail}
              alt="QR Code Payment Demo"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // Fallback to hqdefault if maxresdefault doesn't exist
                e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                  <Play className="w-7 h-7 text-black ml-1" fill="black" />
                </div>
              </div>
            </div>

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white text-2xl font-semibold mb-2">See QR Payment in Action</h3>
              <p className="text-gray-300">Watch how easy it is to scan and pay with QR codes across Asia</p>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-[2rem] blur-2xl -z-10" />
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setIsVideoOpen(false)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="QR Code Payment Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoShowcaseSection;
