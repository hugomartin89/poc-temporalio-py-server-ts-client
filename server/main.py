from temporalio import workflow
from temporalio.client import Client
from temporalio.worker import Worker

@workflow.defn
class MyWorkflow:
    @workflow.run
    async def run(self, data: dict) -> str:
        return f"Hello from Python! This is the data I received from the client: {data}"

async def main():
    client = await Client.connect("localhost:7233")

    worker = Worker(
        client,
        task_queue="my-custom-queue",
        workflows=[MyWorkflow],
    )

    print("Worker running...")
    await worker.run()

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
