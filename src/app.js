const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const authRoutes = require('./routes/authRoutes');
const passeioRoutes = require('./routes/passeioRoutes');
const reservaRoutes = require('./routes/reservaRoutes');

const app = express();

app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Aurora Tours API',
      version: '1.0.0',
      description: 'API REST simplificada para agência de viagens Aurora Tours.'
    },
    servers: [{ url: 'http://localhost:3000' }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        Usuario: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            nome: { type: 'string' },
            email: { type: 'string' },
            tipo: { type: 'string' }
          }
        },
        Passeio: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            nome: { type: 'string' },
            descricao: { type: 'string' },
            destino: { type: 'string' },
            preco: { type: 'number' },
            capacidade_maxima: { type: 'integer' }
          }
        },
        PasseioInput: {
          type: 'object',
          properties: {
            nome: { type: 'string' },
            descricao: { type: 'string' },
            destino: { type: 'string' },
            preco: { type: 'number' },
            capacidade_maxima: { type: 'integer' }
          }
        },
        Reserva: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            id_usuario: { type: 'integer' },
            id_passeio: { type: 'integer' },
            data: { type: 'string' },
            quantidade_pessoas: { type: 'integer' },
            status: { type: 'string', enum: ['RESERVADO', 'CANCELADO'] }
          }
        },
        ReservaInput: {
          type: 'object',
          properties: {
            id_passeio: { type: 'integer' },
            data: { type: 'string' },
            quantidade_pessoas: { type: 'integer' }
          }
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            message: { type: 'string' }
          }
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/swagger.json', (req, res) => res.json(swaggerSpec));

app.use('/', authRoutes);
app.use('/passeios', passeioRoutes);
app.use('/reservas', reservaRoutes);

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message || 'Erro inesperado' });
});

module.exports = app;
