import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCarImages1632508258838 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'car_images',

        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'car_id', type: 'uuid', isNullable: true },
          { name: 'image_name', type: 'varchar' },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],

        foreignKeys: [
          {
            name: 'FKCarImage',
            referencedTableName: 'cars',
            referencedColumnNames: ['id'],
            columnNames: ['car_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('car_images');
  }
}
