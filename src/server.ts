import express from 'express';
import dotenv from 'dotenv';
import userRoutes from '../src/api/routes/useRoutes.ts';
import { errorHandler } from '../src/api/middleware/errorHandler.ts';
import { up as createTables } from '../src/db/migrations/001_create_users.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Error handling
app.use(errorHandler);

// Initialize database and start server
async function startServer() {
  try {
    // Run migrations
    await createTables();
    
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();