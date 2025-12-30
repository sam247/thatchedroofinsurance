import Link from "next/link";
import { Star, Quote } from "lucide-react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Margaret Thompson",
      location: "Devon",
      rating: 5,
      text: "Excellent service from start to finish. When we had a chimney fire, the claims team were fantastic. They arranged a specialist thatcher within days and kept us informed throughout.",
      date: "November 2024",
    },
    {
      name: "David & Sarah Hartley",
      location: "Norfolk",
      rating: 5,
      text: "After struggling to find affordable insurance for our 16th century cottage, Thatched Roof Insurance provided comprehensive cover at a reasonable price. Highly recommended!",
      date: "October 2024",
    },
    {
      name: "John Williams",
      location: "Cotswolds",
      rating: 5,
      text: "The personal touch makes all the difference. I spoke to the same advisor throughout my quote process, and they took time to understand our property's specific needs.",
      date: "September 2024",
    },
    {
      name: "Emma Richardson",
      location: "Suffolk",
      rating: 5,
      text: "We've been with them for 8 years now. Competitive premiums, excellent claims service, and they genuinely understand thatched properties. Wouldn't go anywhere else.",
      date: "August 2024",
    },
    {
      name: "Robert & Helen Clarke",
      location: "Hampshire",
      rating: 5,
      text: "Storm damage to our thatch was dealt with quickly and professionally. Their network of approved thatchers meant repairs were done properly by experts.",
      date: "July 2024",
    },
    {
      name: "Patricia Moore",
      location: "Dorset",
      rating: 5,
      text: "Finally, an insurer who doesn't treat thatched properties as impossible to insure. Fair prices and knowledgeable staff who actually listen.",
      date: "June 2024",
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Reviews</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what thatched property owners across the UK say about our service.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mt-6 p-4 bg-card rounded-xl inline-flex">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-foreground text-lg">4.9 out of 5</p>
              <p className="text-muted-foreground text-sm">Based on 2,847 reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-foreground text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>
              
              {/* Author */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{review.name}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  {review.location === 'Cotswolds' ? (
                    <Link href="/thatched-roof-insurance-cotswolds" className="text-primary hover:underline font-semibold">
                      {review.location}
                    </Link>
                  ) : review.location === 'Devon' ? (
                    <Link href="/thatched-roof-insurance-devon" className="text-primary hover:underline font-semibold">
                      {review.location}
                    </Link>
                  ) : review.location === 'Norfolk' ? (
                    <Link href="/thatched-roof-insurance-norfolk" className="text-primary hover:underline font-semibold">
                      {review.location}
                    </Link>
                  ) : review.location === 'Hampshire' ? (
                    <Link href="/thatched-roof-insurance-hampshire" className="text-primary hover:underline font-semibold">
                      {review.location}
                    </Link>
                  ) : review.location === 'Dorset' ? (
                    <Link href="/thatched-roof-insurance-dorset" className="text-primary hover:underline font-semibold">
                      {review.location}
                    </Link>
                  ) : (
                    <span>{review.location}</span>
                  )}
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;