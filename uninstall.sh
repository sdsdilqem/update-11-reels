#!/bin/bash

echo "Starting uninstallation process..."

# Stop and remove PM2 processes
echo "Stopping PM2 processes..."
pm2 delete all || true
pm2 kill || true

# Remove PM2 startup configuration
echo "Removing PM2 startup configuration..."
pm2 unstartup systemd || true

# Remove global packages
echo "Removing global packages..."
npm uninstall -g pm2 serve

# Remove project dependencies and build artifacts
echo "Cleaning up project files..."
rm -rf node_modules
rm -rf dist
rm -rf .next
rm -rf build

# Remove database files
echo "Removing database files..."
rm -rf prisma/*.db
rm -rf prisma/migrations

# Remove environment files (optional - uncomment if needed)
# echo "Removing environment files..."
# rm -f .env
# rm -f .env.production

echo "Uninstallation complete!"