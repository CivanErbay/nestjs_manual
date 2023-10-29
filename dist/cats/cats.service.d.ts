import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsService {
    private readonly cats;
    create(cat: CreateCatDto): void;
    findAll(): Cat[];
}
