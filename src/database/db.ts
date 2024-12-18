import sql, { ConnectionPool } from 'mssql';

// MSSQL Configuration
const config: sql.config = {
  user: 'sa',
  password: 'Password12!',
  server: '127.0.0.1', // Replace with container name if in Docker Compose
  database: 'hatkom.test',
  port: 1433,
  options: {
    encrypt: true,
    trustServerCertificate: true, // For self-signed certs in development
  },
};

// Function to connect to the database
export const connectToDatabase = async (): Promise<ConnectionPool> => {
  try {
    const pool = await sql.connect(config);
    console.log('Connected to MSSQL');
    return pool;
  } catch (error) {
    console.error('Database connection failed!', error);
    process.exit(1);
  }
};
