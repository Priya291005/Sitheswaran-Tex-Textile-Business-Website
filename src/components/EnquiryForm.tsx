import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, RefreshCw, FileText } from 'lucide-react';
import { Product } from '@/src/data/products.ts';

interface EnquiryFormProps {
  preselectedProduct: Product | null;
  onClearPreselected: () => void;
}

interface FormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  productRequirement: string;
  quantity: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  productRequirement?: string;
  quantity?: string;
  message?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  preselectedProduct,
  onClearPreselected,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phoneNumber: '',
    email: '',
    productRequirement: '',
    quantity: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [preparedSummary, setPreparedSummary] = useState<FormState | null>(null);

  // Sync when user clicks Enquire on a product card
  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({
        ...prev,
        productRequirement: `${preselectedProduct.name} (${preselectedProduct.categoryLabel})`,
      }));
      setIsSubmitted(false);
    }
  }, [preselectedProduct]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name check
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    // Phone number check (Indian or international valid phone)
    const phoneClean = formData.phoneNumber.replace(/[\s\-\(\)\+]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required.';
    } else if (!/^\d{10,13}$/.test(phoneClean)) {
      newErrors.phoneNumber = 'Please enter a valid phone number (at least 10 digits).';
    }

    // Email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Product requirement
    if (!formData.productRequirement.trim()) {
      newErrors.productRequirement = 'Please specify the fabric or weaving requirement.';
    }

    // Quantity check
    if (!formData.quantity.trim()) {
      newErrors.quantity = 'Please specify the required quantity (e.g., 500 meters, 10 rolls).';
    }

    // Message length check (min 10 characters)
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details about your inquiry.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setPreparedSummary({ ...formData });
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      productRequirement: '',
      quantity: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setPreparedSummary(null);
    onClearPreselected();
  };

  // Helper to construct WhatsApp message URL
  const generateWhatsAppUrl = (data: FormState) => {
    const text = encodeURIComponent(
      `Hello Sitheswaran Tex,\n\nI would like to enquire about your textiles:\n` +
      `• Name: ${data.fullName}\n` +
      `• Phone: ${data.phoneNumber}\n` +
      `• Email: ${data.email}\n` +
      `• Requirement: ${data.productRequirement}\n` +
      `• Quantity: ${data.quantity}\n` +
      `• Message: ${data.message}\n\n` +
      `Thank you!`
    );
    return `https://wa.me/918220366523?text=${text}`;
  };

  return (
    <section id="enquiry" className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Card Container */}
        <div className="bg-white rounded-2xl border border-[#E0D7C9] shadow-sm p-6 sm:p-10">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-xs font-semibold tracking-wider text-[#9A6B29] uppercase mb-2">
              Direct Business Inquiry
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#24211E] tracking-tight">
              Send Product Enquiry
            </h2>
            <div className="w-12 h-0.5 bg-[#B38548] mx-auto mt-3 mb-3" />
            <p className="text-xs sm:text-sm text-[#665D51] leading-relaxed">
              Submit your fabric specifications, estimated meterage, and intended application. Our Namakkal weaving desk will review your details promptly.
            </p>
          </div>

          {/* Success Notification State */}
          {isSubmitted && preparedSummary ? (
            <div className="p-6 sm:p-8 bg-[#FAF7F0] rounded-xl border border-[#D9CEBF] animate-in fade-in duration-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#9A6B29] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#24211E]">
                    Thank you! Your enquiry has been prepared successfully. We will get back to you soon.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#63584A] mt-1.5 leading-relaxed">
                    Your details are verified. You can also send this prepared message directly to our official WhatsApp line for instant communication with our Namakkal team.
                  </p>
                </div>
              </div>

              {/* Prepared Summary Box */}
              <div className="mt-6 p-4.5 bg-white rounded-lg border border-[#E5DDD0] text-xs space-y-2">
                <div className="flex items-center gap-1.5 font-semibold text-[#24211E] pb-2 border-b border-[#F0EBE1]">
                  <FileText className="w-4 h-4 text-[#B38548]" />
                  <span>Enquiry Record Prepared:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#574E43] pt-1">
                  <div><span className="font-medium text-[#24211E]">Name:</span> {preparedSummary.fullName}</div>
                  <div><span className="font-medium text-[#24211E]">Phone:</span> {preparedSummary.phoneNumber}</div>
                  <div><span className="font-medium text-[#24211E]">Email:</span> {preparedSummary.email}</div>
                  <div><span className="font-medium text-[#24211E]">Quantity:</span> {preparedSummary.quantity}</div>
                </div>
                <div className="pt-1 text-[#574E43]">
                  <span className="font-medium text-[#24211E]">Requirement:</span> {preparedSummary.productRequirement}
                </div>
                <div className="text-[#574E43]">
                  <span className="font-medium text-[#24211E]">Message:</span> {preparedSummary.message}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={generateWhatsAppUrl(preparedSummary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp (+91 8220366523)</span>
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#4A453F] hover:text-[#24211E] bg-white rounded-xl border border-[#DDD5C7] transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Prepare Another Enquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Enquiry Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {preselectedProduct && (
                <div className="p-3 bg-[#FAF5EB] rounded-lg border border-[#E8DDCF] flex items-center justify-between text-xs text-[#7A6038]">
                  <span>
                    Inquiring about: <strong className="text-[#24211E]">{preselectedProduct.name}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={onClearPreselected}
                    className="text-[#9A6B29] hover:underline font-semibold text-[11px]"
                  >
                    Change selection
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-[#24211E] mb-1.5">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full px-3.5 py-2.5 text-xs bg-white rounded-lg border text-[#24211E] placeholder-[#A39688] focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-red-300'
                        : 'border-[#DDD5C7] focus:ring-[#B38548] focus:border-transparent'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold text-[#24211E] mb-1.5">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className={`w-full px-3.5 py-2.5 text-xs bg-white rounded-lg border text-[#24211E] placeholder-[#A39688] focus:outline-none focus:ring-2 transition-all ${
                      errors.phoneNumber
                        ? 'border-red-500 focus:ring-red-300'
                        : 'border-[#DDD5C7] focus:ring-[#B38548] focus:border-transparent'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#24211E] mb-1.5">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className={`w-full px-3.5 py-2.5 text-xs bg-white rounded-lg border text-[#24211E] placeholder-[#A39688] focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-red-300'
                        : 'border-[#DDD5C7] focus:ring-[#B38548] focus:border-transparent'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Required Quantity */}
                <div>
                  <label htmlFor="quantity" className="block text-xs font-semibold text-[#24211E] mb-1.5">
                    Estimated Quantity <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 500 Meters / 20 Rolls / Sample Run"
                    className={`w-full px-3.5 py-2.5 text-xs bg-white rounded-lg border text-[#24211E] placeholder-[#A39688] focus:outline-none focus:ring-2 transition-all ${
                      errors.quantity
                        ? 'border-red-500 focus:ring-red-300'
                        : 'border-[#DDD5C7] focus:ring-[#B38548] focus:border-transparent'
                    }`}
                  />
                  {errors.quantity && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.quantity}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Product / Requirement */}
              <div>
                <label htmlFor="productRequirement" className="block text-xs font-semibold text-[#24211E] mb-1.5">
                  Product / Requirement <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="productRequirement"
                  value={formData.productRequirement}
                  onChange={(e) => setFormData({ ...formData, productRequirement: e.target.value })}
                  placeholder="e.g. Pure Cotton Plain Weave 40s / Twill 54” / Custom Checked Pattern"
                  className={`w-full px-3.5 py-2.5 text-xs bg-white rounded-lg border text-[#24211E] placeholder-[#A39688] focus:outline-none focus:ring-2 transition-all ${
                    errors.productRequirement
                      ? 'border-red-500 focus:ring-red-300'
                      : 'border-[#DDD5C7] focus:ring-[#B38548] focus:border-transparent'
                  }`}
                />
                {errors.productRequirement && (
                  <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.productRequirement}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#24211E] mb-1.5">
                  Message & Specifications <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your warp/weft requirements, weave preferences, delivery expectations, or questions..."
                  className={`w-full px-3.5 py-2.5 text-xs bg-white rounded-lg border text-[#24211E] placeholder-[#A39688] focus:outline-none focus:ring-2 transition-all ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-300'
                      : 'border-[#DDD5C7] focus:ring-[#B38548] focus:border-transparent'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 text-xs font-semibold text-white bg-[#24211E] hover:bg-[#3D3731] active:bg-[#151412] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Send Enquiry</span>
                </button>

                {/* Direct quick WhatsApp option without form */}
                <a
                  href="https://wa.me/918220366523?text=Hello%20Sitheswaran%20Tex,%20I%20would%20like%20to%20enquire%20about%20your%20textile%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#1F5131] hover:text-[#143B22] bg-[#EBF7EE] hover:bg-[#DDF2E2] rounded-xl border border-[#CCE8D4] flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Direct WhatsApp Enquiry</span>
                </a>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};
