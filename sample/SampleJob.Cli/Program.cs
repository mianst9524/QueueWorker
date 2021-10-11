using System;
using System.Threading.Tasks;
using ConsoleAppFramework;
using Microsoft.Extensions.Hosting;

namespace SampleJob.Cli
{
    class Program
    {
        static async Task Main(string[] args)
        {
            await Host.CreateDefaultBuilder()
                .RunConsoleAppFrameworkAsync<Batch>(args);
        }
    }
}