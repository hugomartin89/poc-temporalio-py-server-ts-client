import { Connection, Client } from '@temporalio/client';
import { v4 } from 'uuid';

async function run() {
    const connection = await Connection.connect({ address: 'localhost:7233' });

    const client = new Client({ connection });

    const handle = await client.workflow.start('MyWorkflow', {
        taskQueue: 'my-custom-queue',
        args: [{ data: 'test data' }],
        workflowId: v4(),
    });

    console.log(`Started workflow: ${handle.workflowId}`);

    const result = await handle.result();
    console.log(`Workflow result: ${result}`);
}

run().catch(err => console.error(err));
