import { Injectable } from '@nestjs/common';
import { StaffInfo } from './staff.types';
import { StaffRepository } from './staff.repository';

@Injectable()
export class StaffService {
  constructor(private readonly _staffRepo: StaffRepository) {}
  
  async getStaff(staffId: string): Promise<any> {
    return await this._staffRepo.findStaffById(staffId);
  }

  async getSalonStaff(salonId: string): Promise<any> {
    return await this._staffRepo.findStaffBySalonId(salonId);
  }

  async saveStaffInfo(staffInfo: StaffInfo): Promise<any> {
    return await this._staffRepo.saveStaff(staffInfo);
  }

  async updateStaff(
    staffId: string,
    staffInfo: Partial<StaffInfo>,
  ): Promise<any> {
    return await this._staffRepo.updateStaff(staffId, staffInfo);
  }

  async removeStaff(staffId: string): Promise<any> {
    return await this._staffRepo.deleteStaff(staffId);
  }
}
