#!/usr/bin/env node

console.log('🔯 Starting I Ching Development Server...');
console.log('📍 Location: http://localhost:3000');
console.log('🔄 Hot reload enabled - changes will auto-refresh');
console.log('⚠️  Press Ctrl+C to stop the server');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');

// Start the React development server
const { spawn } = require('child_process');

const server = spawn('npm', ['start'], {
    stdio: 'inherit',
    shell: true
});

server.on('error', (error) => {
    console.error('❌ Failed to start development server:', error);
});

server.on('close', (code) => {
    console.log('');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🔯 I Ching Development Server stopped');
    if (code !== 0) {
        console.log(`❌ Server exited with code ${code}`);
    }
});