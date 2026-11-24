# RepoGuide backend

NestJS API with TypeORM and PostgreSQL.

## Local development

Requirements: Node.js and PostgreSQL installed and running locally.

From the `backend` directory, copy the example environment file and update
`DB_PASSWORD` to match your local PostgreSQL password:

```powershell
Copy-Item .env.example .env
```

Create a PostgreSQL database named `repoguide` (for example, in pgAdmin), then
install dependencies and run the API:

```powershell
npm install
npm run start:dev
```

The API listens on `http://localhost:3000`. Check `http://localhost:3000/health`.

Database schema synchronization is disabled. Add TypeORM entities and migrations
as the application data model is introduced.
