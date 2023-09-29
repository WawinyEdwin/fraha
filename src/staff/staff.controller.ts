import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StaffService } from './staff.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('staff')
@Controller('staff')
export class StaffController {
  constructor(private readonly _staffService: StaffService) {}

  @Get(':staffId')
  async handleGetStaff(@Param('staffId') staffId: string): Promise<any> {
    const response = await this._staffService.getStaff(staffId);
    return response;
  }

  @Get('salon/:salonId')
  async handleSalonStaff(@Param('salonId') salonId: string): Promise<any> {
    const response = await this._staffService.getSalonStaff(salonId);
    return response;
  }

  @Post('')
  async handleSaveStaffInfo(@Body() body: any): Promise<any> {
    const response = await this._staffService.saveStaffInfo(body);
    return response;
  }

  @Patch(':staffId')
  async handleUpdateStaff(
    @Param('staffId') staffId: string,
    @Body() body: any,
  ): Promise<any> {
    const response = await this._staffService.updateStaff(staffId, body);
    return response;
  }

  @Delete(':staffId')
  async handleDeleteStaff(@Param('staffId') staffId: string): Promise<any> {
    const response = await this._staffService.removeStaff(staffId);
    return response;
  }
}
