import { up as createUsersTable } from './001_create_users.ts';
import logger from '../../utils/logger.ts';

async function runMigrations() {
  try {
    logger.info('Starting migrations...');
    
    // Add migrations in order
    await createUsersTable();
    
    logger.info('Migrations completed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigrations();