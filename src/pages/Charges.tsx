import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useEffect } from "react";

const Charges = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.pricing-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="min-h-screen bg-slate-900 text-white pt-20 relative"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80")',
          filter: 'brightness(0.2)'
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 animate-fade-in">
          Training Plans & Pricing
        </h1>

        <div className="space-y-8">
          {/* Individual Sessions */}
          <Card className="pricing-card bg-slate-800/50 border-slate-700 p-6 backdrop-blur-md transition-all duration-500 opacity-0 transform translate-y-4 hover:shadow-xl hover:shadow-blue-500/10">
            <h2 className="text-2xl font-montserrat font-semibold mb-6 text-blue-400">Individual Training (Monthly Plan - 8 Sessions)</h2>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700">
                  <TableHead className="text-white">Description</TableHead>
                  <TableHead className="text-white">1-Hour Sessions</TableHead>
                  <TableHead className="text-white">2-Hour Sessions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-slate-700">
                  <TableCell>Base Cost</TableCell>
                  <TableCell>₹4,800</TableCell>
                  <TableCell>₹9,600</TableCell>
                </TableRow>
                <TableRow className="border-slate-700">
                  <TableCell>Court Charges</TableCell>
                  <TableCell>₹1,080</TableCell>
                  <TableCell>₹2,160</TableCell>
                </TableRow>
                <TableRow className="border-slate-700">
                  <TableCell>Shuttle Cost</TableCell>
                  <TableCell>₹1,040</TableCell>
                  <TableCell>₹1,040</TableCell>
                </TableRow>
                <TableRow className="border-slate-700 font-semibold text-blue-400">
                  <TableCell>Total Monthly Cost</TableCell>
                  <TableCell>₹6,920</TableCell>
                  <TableCell>₹12,800</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          {/* Group Sessions */}
          <Card className="pricing-card bg-slate-800/50 border-slate-700 p-6 backdrop-blur-md transition-all duration-500 opacity-0 transform translate-y-4 hover:shadow-xl hover:shadow-violet-500/10">
            <h2 className="text-2xl font-montserrat font-semibold mb-6 text-violet-400">Group Training - Monthly Cost Per Person (8 Sessions)</h2>
            
            {/* 1-Hour Group Sessions */}
            <div className="mb-8">
              <h3 className="text-xl font-montserrat mb-4 text-violet-300">1-Hour Sessions</h3>
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-white">Group Size</TableHead>
                    <TableHead className="text-white">Base Cost</TableHead>
                    <TableHead className="text-white">Court Charges</TableHead>
                    <TableHead className="text-white">Shuttle Cost</TableHead>
                    <TableHead className="text-white">Total Monthly Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-slate-700">
                    <TableCell>3 People</TableCell>
                    <TableCell>₹3,200</TableCell>
                    <TableCell>₹360</TableCell>
                    <TableCell>₹352</TableCell>
                    <TableCell className="font-semibold text-violet-400">₹3,912</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700">
                    <TableCell>4 People</TableCell>
                    <TableCell>₹3,200</TableCell>
                    <TableCell>₹272</TableCell>
                    <TableCell>₹264</TableCell>
                    <TableCell className="font-semibold text-violet-400">₹3,736</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700">
                    <TableCell>5 People</TableCell>
                    <TableCell>₹3,200</TableCell>
                    <TableCell>₹216</TableCell>
                    <TableCell>₹208</TableCell>
                    <TableCell className="font-semibold text-violet-400">₹3,624</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* 2-Hour Group Sessions */}
            <div>
              <h3 className="text-xl font-montserrat mb-4 text-violet-300">2-Hour Sessions</h3>
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-white">Group Size</TableHead>
                    <TableHead className="text-white">Base Cost</TableHead>
                    <TableHead className="text-white">Court Charges</TableHead>
                    <TableHead className="text-white">Shuttle Cost</TableHead>
                    <TableHead className="text-white">Total Monthly Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-slate-700">
                    <TableCell>3 People</TableCell>
                    <TableCell>₹6,400</TableCell>
                    <TableCell>₹720</TableCell>
                    <TableCell>₹352</TableCell>
                    <TableCell className="font-semibold text-violet-400">₹7,472</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700">
                    <TableCell>4 People</TableCell>
                    <TableCell>₹6,400</TableCell>
                    <TableCell>₹544</TableCell>
                    <TableCell>₹264</TableCell>
                    <TableCell className="font-semibold text-violet-400">₹7,208</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700">
                    <TableCell>5 People</TableCell>
                    <TableCell>₹6,400</TableCell>
                    <TableCell>₹432</TableCell>
                    <TableCell>₹208</TableCell>
                    <TableCell className="font-semibold text-violet-400">₹7,040</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>

          <div className="mt-8 space-y-4">
            <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 animate-pulse">
              <p className="text-center text-gray-300">
                All plans include 8 sessions per month. Starting from January 15th onwards.
              </p>
            </div>
            <div className="p-4 bg-violet-500/10 rounded-lg border border-violet-500/20">
              <p className="text-center text-gray-300">
                * Prices are negotiable based on commitment and group size. Contact us for custom packages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charges;