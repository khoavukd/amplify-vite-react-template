import type { Schema } from '../../data/resource';

export const handler: Schema["echo"]["functionHandler"] = async (event, context) => {
    console.log(context);
    const start = performance.now();
    return {
        content: `Echoing content ${event.arguments.content} `,
        executionDuration: performance.now() - start
    }
}