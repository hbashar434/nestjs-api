import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  // GET all coffees
  @Get()
  getCoffees(@Query('flavor') flavor?: string) {
    if (flavor) {
      return [{ property: `Coffees with flavor: ${flavor}` }];
    }
    return [{ property: 'Hello from coffee array!' }];
  }

  // GET a specific coffee by ID
  @Get(':id')
  getOneCoffee(@Param('id') id: string) {
    return { id, property: 'Details of a specific coffee' };
  }

  // POST a new coffee
  @Post()
  createCoffee(@Body() coffeeData: { name: string; flavor: string }) {
    return {
      message: 'Coffee created successfully!',
      coffee: coffeeData,
    };
  }

  // PUT (update) a specific coffee by ID
  @Put(':id')
  updateCoffee(
    @Param('id') id: string,
    @Body() updateData: { name?: string; flavor?: string },
  ) {
    return {
      message: `Coffee with ID ${id} updated successfully!`,
      updatedProperties: updateData,
    };
  }

  // DELETE a specific coffee by ID
  @Delete(':id')
  deleteCoffee(@Param('id') id: string) {
    return { message: `Coffee with ID ${id} deleted successfully!` };
  }
}