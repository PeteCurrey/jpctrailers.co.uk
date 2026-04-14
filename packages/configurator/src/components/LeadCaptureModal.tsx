'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; phone: string; message: string }) => Promise<void>;
  isSubmitting: boolean;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({ isOpen, onClose, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="relative w-full max-w-xl bg-surface border border-border p-8 lg:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-8">
          <span className="font-mono text-[10px] text-accent uppercase tracking-widest block mb-2">// COMMISSION REQUEST</span>
          <h2 className="text-3xl font-syne font-bold uppercase">Technical Consultation</h2>
          <p className="text-text-muted text-sm mt-2">
            Submit your configuration for technical review. Our engineers will contact you to finalize the build slot.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-mono text-[9px] text-text-muted uppercase tracking-widest">Full Name</label>
              <input 
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-bg border border-border p-3 text-sm focus:border-accent outline-none transition-colors"
                placeholder="JOHN DOE"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[9px] text-text-muted uppercase tracking-widest">Email Address</label>
              <input 
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-bg border border-border p-3 text-sm focus:border-accent outline-none transition-colors"
                placeholder="JOHN@EXAMPLE.COM"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-mono text-[9px] text-text-muted uppercase tracking-widest">Phone Number</label>
            <input 
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-bg border border-border p-3 text-sm focus:border-accent outline-none transition-colors"
              placeholder="+44 0000 000000"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-[9px] text-text-muted uppercase tracking-widest">Additional Notes (Optional)</label>
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              className="w-full bg-bg border border-border p-3 text-sm focus:border-accent outline-none transition-colors resize-none"
              placeholder="INTENDED USE, SPECIFIC AXLE REQUIREMENTS, ETC."
            />
          </div>

          <div className="pt-4 flex flex-col md:flex-row gap-4">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 py-4 border border-border font-mono text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-4 bg-accent text-white font-mono text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Submit Engineering Spec'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
