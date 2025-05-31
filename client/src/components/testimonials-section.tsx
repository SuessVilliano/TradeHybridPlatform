import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jacob S.",
      content: "I've been trying to learn how to trade for a while, Trade Hybrid made it so simple to understand and helped me to get my trade plan together and now I am actually profiting and withdrawing consistently!",
      rating: 5
    },
    {
      name: "Jessica P.",
      content: "The Hybrid Trading AI Team has completely transformed my trading experience. Market Buddy's trade analysis is spot on, and Psyche Master has helped me maintain a calm and strategic mindset during market fluctuations. It's like having an entire team of experts working alongside me!",
      rating: 5
    },
    {
      name: "Dany M.",
      content: "As a novice trader, I was overwhelmed by the complexities of the market. The Hybrid Trading AI Team changed that for me. It's the ultimate toolkit for traders at any level!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from traders who have transformed their trading journey with Trade Hybrid
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="th-card-hover bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-purple-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Trade Hybrid Member</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready To Take Action?</h3>
            <p className="text-lg mb-6">Join thousands of successful traders in the Trade Hybrid community</p>
            <button 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              onClick={() => window.open('https://whop.com/checkout/5sIJaH2cjV5tQsOoBX-eJnb-QHqG-OP9q-5z9KmBGnaxrB/', '_blank')}
            >
              JOIN TRADE HYBRID
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}