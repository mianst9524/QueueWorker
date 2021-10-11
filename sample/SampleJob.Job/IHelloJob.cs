using System.Threading.Tasks;
using SampleJob.Job.Dto;

namespace SampleJob.Job
{
    public interface IHelloJob
    {
        Task Hello(HelloParameter parameter);
    }
}