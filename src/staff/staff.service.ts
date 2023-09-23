import { Injectable } from '@nestjs/common';
import { StaffInfo } from './staff.types';
import { StaffRepository } from './staff.repository';

@Injectable()
export class StaffService {
  constructor(private readonly _staffRepo: StaffRepository) {}
  
  async getStaff(staffId: string): Promise<any> {
    const response = await this._staffRepo.findStaffById(staffId);
    return response;
  }

  async getSalonStaff(salonId: string): Promise<any> {
    const response = await this._staffRepo.findStaffBySalonId(salonId);
    return response;
  }

  async saveStaffInfo(staffInfo: StaffInfo): Promise<any> {
    const response = await this._staffRepo.saveStaff(staffInfo);
    return response;
  }

  async updateStaff(
    staffId: string,
    staffInfo: Partial<StaffInfo>,
  ): Promise<any> {
    const response = await this._staffRepo.updateStaff(staffId, staffInfo);
    return response;
  }

  async removeStaff(staffId: string): Promise<any> {
    const response = await this._staffRepo.deleteStaff(staffId);
    return response;
  }
}
