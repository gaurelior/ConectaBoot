const { MongoClient } = require('mongodb');

// URL de conexão do MongoDB
const url = 'mongodb+srv://gaureliorodrigues:paraiba162@gabis.oh10e.mongodb.net/?retryWrites=true&w=majority&appName=gabis'; // ou a URL do seu MongoDB Atlas, se estiver usando
const dbName = 'seuBancoDeDados'; // substitua pelo nome do seu banco de dados

async function testarConexao() {
    const client = new MongoClient(url);

    try {
        // Conectar ao cliente
        await client.connect();
        console.log('Conexão com MongoDB estabelecida com sucesso!');

        const db = client.db(ConectaBot);
        const collection = db.collection('testCollection'); // ou qualquer coleção que você tenha

        // Exemplo: Inserir um documento para testar
        const resultado = await collection.insertOne({ teste: 'Conexão bem-sucedida!' });
        console.log(`Documento inserido com o id: ${resultado.insertedId}`);

        // Exemplo: Encontrar um documento
        const documento = await collection.findOne({ teste: 'Conexão bem-sucedida!' });
        console.log('Documento encontrado:', documento);
        
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    } finally {
        await client.close(); // Fecha a conexão
    }
}

testarConexao().catch(console.error);
