import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "./Producto";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    @IsNotEmpty({ message: 'Debe indicar el ID.' })
    id: number;

    @Column({ length: 50, nullable: false })
    @MaxLength(50, { message: 'Debe contener un máximo de 50 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar el nombre de la categoría.' })
    nombre: string;

    @Column({ length: 500, nullable: false })
    @MaxLength(500, { message: 'Debe contener un máximo de 500 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar la descripción de la categoría.' })
    descripcion: string;

    @Column({ default: 1 })
    @IsNotEmpty({ message: 'Debe indicar el estado.' })
    estado: boolean;

    @OneToMany(() => Producto, (producto) => producto.categoria)
    productos: Producto[];
}
