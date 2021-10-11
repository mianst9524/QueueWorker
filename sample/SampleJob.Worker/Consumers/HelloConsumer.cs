using System.Threading.Tasks;
using Library.AsyncJob.Worker;
using Microsoft.Extensions.Logging;
using SampleJob.Job;
using SampleJob.Job.Dto;

namespace SampleJob.Worker.Consumers
{
    public class HelloConsumer : ConsumerBase, IHelloJob
    {
        private readonly ILogger<HelloConsumer> _logger;

        public HelloConsumer(ILogger<HelloConsumer> logger)
        {
            _logger = logger;
        }

        public Task Hello(HelloParameter parameter)
        {
            _logger.LogInformation("Hello {name} san!", parameter.Name);
            return Task.CompletedTask;
        }
    }
}