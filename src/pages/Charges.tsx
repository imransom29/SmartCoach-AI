import { Card } from "@/components/ui/card";

const Charges = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-12 text-center">
          Training Plans
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Individual Sessions */}
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h2 className="text-2xl font-montserrat font-semibold mb-6">Individual Sessions</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-gray-300">1-Hour Session</span>
                <span className="text-blue-400">₹600</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-gray-300">2-Hour Session</span>
                <span className="text-blue-400">₹1,200</span>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                * Court charges (₹135/₹270) and shuttle cost (₹130) applicable per session
              </div>
            </div>
          </Card>

          {/* Group Sessions */}
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <h2 className="text-2xl font-montserrat font-semibold mb-6">Group Sessions (Per Person)</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-gray-300">3 People</span>
                <span className="text-blue-400">₹400</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-gray-300">4 People</span>
                <span className="text-blue-400">₹400</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                <span className="text-gray-300">5 People</span>
                <span className="text-blue-400">₹400</span>
              </div>
              <div className="mt-4 text-sm text-gray-400">
                * Court charges and shuttle cost will be split among group members
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
          <p className="text-center text-gray-300">
            All plans include 8 sessions per month. Starting from January 15th onwards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Charges;