using System.Threading.Tasks;
using ConsoleAppFramework;
using SampleJob.Job;
using SampleJob.Job.Dto;

namespace SampleJob.Cli
{
    public class Batch : ConsoleAppBase
    {
        private readonly ICalcJob _calcJob;

        public Batch(ICalcJob calcJob)
        {
            _calcJob = calcJob;
        }

        public async Task Run()
        {
            // 非同期呼び出し
            _ = _calcJob.Add(new CalcParameter { A = 1, B = 10 });
        }
    }
}
