import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car{
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    marca: string;

    @ApiProperty()
    @Column()
    modelo: string;

    @ApiProperty()
    @Column()
    color: string;
    
    @ApiProperty()
    @Column()
    tipo: string;
}