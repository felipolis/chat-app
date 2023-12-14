import { Injectable } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async updateProfile(userId: number, fullName: string, avatarUrl: string) {
    if (avatarUrl) {
      const oldUser = await this.prismaService.user.findUnique({
        where: { id: userId },
      });
      const updatedUser = await this.prismaService.user.update({
        where: { id: userId },
        data: {
          fullName,
          avatarUrl,
        },
      });

      if (oldUser.avatarUrl) {
        const imageName = oldUser.avatarUrl.split('/').pop();
        const imagePath = join(
          __dirname,
          '..',
          '..',
          'public',
          'images',
          imageName,
        );
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }

      return updatedUser;
    }
    return await this.prismaService.user.update({
      where: { id: userId },
      data: {
        fullName,
      },
    });
  }

  async searchUsers(fullName: string, userId: number) {
    // make sure that users are found that contain part of the fullName
    // and exclude the current user
    return this.prismaService.user.findMany({
      where: {
        fullName: {
          contains: fullName,
        },
        id: {
          not: userId,
        },
      },
    });
  }

  async getUsersOfChatroom(chatroomId: number) {
    return this.prismaService.user.findMany({
      where: {
        chatrooms: {
          some: {
            id: chatroomId,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getUser(userId: number) {
    return this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
}
