import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar el RUC.' })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    ruc: string;

    @Column({ length: 50, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar el nombre.' })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    nombre: string;

    @Column({ length: 50, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar el apellido.' })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    apellidos: string;

    @Column({ length: 100, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar la dirección.' })
    @MaxLength(100, { message: 'Debe contener un máximo de 100 caracteres.' })
    direccion: string;

    @Column({ length: 20, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar el teléfono.' })
    @MaxLength(20, { message: 'Debe contener un máximo de 20 caracteres.' })
    telefono: string;
}
