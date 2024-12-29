import React, { useRef, useEffect, useState } from 'react';
import { Heart, MessageCircle, Share2, ShoppingBag, ChevronDown, Volume2, VolumeX } from 'lucide-react';
import type { Reel } from '../../../types/reel';

interface VideoReelProps {
  reel: Reel;
  isActive: boolean;
  isFirst?: boolean;
  onVideoEnd?: () => void;
} 

export default function VideoReel({ reel, isActive, isFirst = false, onVideoEnd }: VideoReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showMuteIndicator, setShowMuteIndicator] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  useEffect(() => {
    if (showMuteIndicator) {
      const timer = setTimeout(() => {
        setShowMuteIndicator(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showMuteIndicator, isMuted]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVolumeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    setShowMuteIndicator(true);
  };

  return (
    <div className="h-full w-full relative bg-black">
      {/* Video */}
      <div 
        className="absolute inset-0"
        onClick={handleVideoClick}
      >
        <video
          ref={videoRef}
          src={reel.url}
          className="w-full h-full object-cover"
          playsInline
          loop
          muted={isMuted}
          poster={reel.thumbnail}
          onEnded={onVideoEnd}
        />

        {/* Volume Control Button */}
        <button
          onClick={handleVolumeClick}
          className="absolute top-4 right-4 p-3 bg-black/30 backdrop-blur-sm rounded-full transition-opacity"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>

        {/* Mute Indicator */}
        {showMuteIndicator && (
          <div 
            className={`
              absolute top-20 right-4 bg-black/50 backdrop-blur-sm text-white 
              px-4 py-2 rounded-full text-sm font-medium transition-opacity duration-450
              ${showMuteIndicator ? 'opacity-100' : 'opacity-0'}
            `}
          >
            {isMuted ? 'Səsi açın' : 'Səs açıldı'}
          </div>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60 pointer-events-none" />

      {/* Scroll Indicator - Only shown for first reel */}
      {isFirst && isActive && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center animate-bounce-slow text-white/90 bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <ChevronDown className="w-8 h-8 mb-1" strokeWidth={2.5} />
            <span className="text-base font-medium">Aşağı sürüşdür</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4 pointer-events-none">
        {/* User Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={reel.avatar}
            alt={reel.username}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div>
            <h3 className="text-white font-semibold">{reel.username}</h3>
            <p className="text-white/80 text-sm">Satıcı</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="mb-4">
          <h2 className="text-white text-xl font-bold mb-2">{reel.title}</h2>
          <p className="text-white/90 text-2xl font-bold">₼{reel.price}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <div className="bg-black/10 backdrop-blur-[2px] rounded-2xl p-3 space-y-6">
          <button className="group flex flex-col items-center">
            <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xs mt-1">{reel.likes}</span>
          </button>
          
          <button className="group flex flex-col items-center">
            <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xs mt-1">{reel.comments}</span>
          </button>
          
          <button className="group flex flex-col items-center">
            <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              <Share2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xs mt-1">Paylaş</span>
          </button>
          
          <button className="group flex flex-col items-center">
            <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xs mt-1">Al</span>
          </button>
        </div>
      </div>
    </div>
  ); 
}