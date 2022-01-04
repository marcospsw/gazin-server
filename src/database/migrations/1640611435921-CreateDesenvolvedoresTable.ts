import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDesenvolvedoresTable1640611435921
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'desenvolvedores',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'nivel_id',
            type: 'uuid',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'sexo',
            type: 'enum',
            enum: ['male', 'female', 'other'],
          },
          {
            name: 'datanascimento',
            type: 'date',
          },
          {
            name: 'idade',
            type: 'integer',
          },
          {
            name: 'hobby',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'nivel_desenvolvedor',
            columnNames: ['nivel_id'],
            referencedTableName: 'niveis',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('desenvolvedores');
  }
}
