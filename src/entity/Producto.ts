import { IsNotEmpty, IsNumber, IsPositive, MaxLength } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Proveedor } from "./Proveedor";
import { Categoria } from "./Categoria";

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar la descripción del producto.' })
    @MaxLength(100, { message: 'Debe contener un máximo de 100 caracteres.' })
    descripcion: string;

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    @IsNotEmpty({ message: 'Debe indicar el precio.' })
    @IsPositive({ message: 'Debe indicar un valor positivo.' })
    precio: number;

    @Column({ type: "int", nullable: false })
    @IsNotEmpty({ message: 'Debe indicar el stock máximo.' })
    @IsPositive({ message: 'Debe indicar un valor positivo.' })
    stock_maximo: number;

    @Column({ type: "int", nullable: false })
    @IsNotEmpty({ message: 'Debe indicar el stock mínimo.' })
    @IsPositive({ message: 'Debe indicar un valor positivo.' })
    stock_minimo: number;

    @ManyToOne(() => Proveedor, proveedor => proveedor.productos)
    @IsNotEmpty({ message: 'Debe indicar el proveedor.' })
    proveedor: Proveedor;

    @ManyToOne(() => Categoria, categoria => categoria.productos)
    @IsNotEmpty({ message: 'Debe indicar la categoría.' })
    categoria: Categoria;
}
