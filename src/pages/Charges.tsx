import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Charges = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-12 text-center">
          Training Plans & Pricing
        </h1>

        {/* Individual Sessions */}
        <div className="space-y-8">
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h2 className="text-2xl font-montserrat font-semibold mb-6">Individual Training Sessions</h2>
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700">
                  <TableHead className="text-white">Description</TableHead>
                  <TableHead className="text-white">1-Hour Session</TableHead>
                  <TableHead className="text-white">2-Hour Session</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-slate-700">
                  <TableCell>Base Cost per Session</TableCell>
                  <TableCell>₹600</TableCell>
                  <TableCell>₹1,200</TableCell>
                </TableRow>
                <TableRow className="border-slate-700">
                  <TableCell>Court Charges</TableCell>
                  <TableCell>₹135</TableCell>
                  <TableCell>₹270</TableCell>
                </TableRow>
                <TableRow className="border-slate-700">
                  <TableCell>Shuttle Cost</TableCell>
                  <TableCell>₹130</TableCell>
                  <TableCell>₹130</TableCell>
                </TableRow>
                <TableRow className="border-slate-700 font-semibold">
                  <TableCell>Total per Session</TableCell>
                  <TableCell>₹865</TableCell>
                  <TableCell>₹1,600</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>

          {/* Group Sessions */}
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h2 className="text-2xl font-montserrat font-semibold mb-6">Group Training Sessions (Per Person)</h2>
            
            {/* 1-Hour Group Sessions */}
            <div className="mb-8">
              <h3 className="text-xl font-montserrat mb-4">1-Hour Sessions</h3>
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-white">Group Size</TableHead>
                    <TableHead className="text-white">Base Cost</TableHead>
                    <TableHead className="text-white">Court Charges Split</TableHead>
                    <TableHead className="text-white">Shuttle Cost Split</TableHead>
                    <TableHead className="text-white">Total per Person</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-slate-700">
                    <TableCell>3 People</TableCell>
                    <TableCell>₹400</TableCell>
                    <TableCell>₹45</TableCell>
                    <TableCell>₹44</TableCell>
                    <TableCell>₹489</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700">
                    <TableCell>4 People</TableCell>
                    <TableCell>₹400</TableCell>
                    <TableCell>₹34</TableCell>
                    <TableCell>₹33</TableCell>
                    <TableCell>₹467</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700">
                    <TableCell>5 People</TableCell>
                    <TableCell>₹400</TableCell>
                    <TableCell>₹27</TableCell>
                    <TableCell>₹26</TableCell>
                    <TableCell>₹453</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* 2-Hour Group Sessions */}
            <div>
              <h3 className="text-xl font-montserrat mb-4">2-Hour Sessions</h3>
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-white">Group Size</TableHead>
                    <TableHead className="text-white">Base Cost</TableHead>
                    <TableHead className="text-white">Court Charges Split</TableHead>
                    <TableHead className="text-white">Shuttle Cost Split</TableHead>
                    <TableHead className="text-white">Total per Person</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-slate-700">
                    <TableCell>3 People</TableCell>
                    <TableCell>₹800</TableCell>
                    <TableCell>₹90</TableCell>
                    <TableCell>₹44</TableCell>
                    <TableCell>₹934</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700">
                    <TableCell>4 People</TableCell>
                    <TableCell>₹800</TableCell>
                    <TableCell>₹68</TableCell>
                    <TableCell>₹33</TableCell>
                    <TableCell>₹901</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-700">
                    <TableCell>5 People</TableCell>
                    <TableCell>₹800</TableCell>
                    <TableCell>₹54</TableCell>
                    <TableCell>₹26</TableCell>
                    <TableCell>₹880</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>

          <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <p className="text-center text-gray-300">
              All plans include 8 sessions per month. Starting from January 15th onwards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charges;