import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

export const FIRESTORE_CONNECTION = 'FIRESTORE_CONNECTION';

@Global()
@Module({
    imports: [ConfigModule],
    providers: [
        {
            provide: FIRESTORE_CONNECTION,
            useFactory: (configService: ConfigService) => {
                if (admin.apps.length === 0) {
                    admin.initializeApp({
                        credential: admin.credential.applicationDefault(),
                        projectId: configService.get<string>('GCP_PROJECT_ID'),
                    });
                }
                return admin.firestore();
            },
            inject: [ConfigService],
        },
    ],
    exports: [FIRESTORE_CONNECTION],
})
export class FirestoreModule { }
