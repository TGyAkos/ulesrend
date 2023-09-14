import { Sequelize, DataTypes, UUIDV4 } from "sequelize";
import crypto from 'crypto'

export default class BookOrm {
    sequelize: Sequelize;

    constructor() {
        this.defineTable()
    }

    async defineTable() {
        await this.createConnection();

        this.sequelize.define('Data', {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                allowNull: false
            },
            data: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            schema: 'UserProvidedData',
            tableName: 'Data',
            freezeTableName: true
        })

        await this.syncDatabase();
    }

    async createConnection() {
        const sequelize = new Sequelize('postgres://root:root@postgres_database:5432/ulesrend')
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        this.sequelize = sequelize;
    }

    async syncDatabase() {
        await this.sequelize.createSchema('UserProvidedData', { logging: false });
        await this.sequelize.sync({ force: true })
    }

    // TODO make this async it isnt required tho
    addNewRecord(data: string) {
        this.sequelize.models.Data.create({
            id: crypto.randomUUID(),
            data: data
        })
    }
}