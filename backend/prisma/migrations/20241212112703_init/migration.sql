-- CreateTable
CREATE TABLE `FirstHolder` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `placeOfBirth` VARCHAR(191) NOT NULL,
    `residentialStatus` ENUM('RESIDENT_INDIAN', 'NRI') NOT NULL DEFAULT 'RESIDENT_INDIAN',
    `motherName` VARCHAR(191) NOT NULL,
    `panNumber` VARCHAR(191) NOT NULL,
    `emailAddress` VARCHAR(191) NOT NULL,
    `mobileNumber` VARCHAR(191) NOT NULL,
    `postalAddress` VARCHAR(191) NOT NULL,
    `grossAnnualIncome` DOUBLE NOT NULL,
    `occupation` VARCHAR(191) NOT NULL,
    `panCardPath` VARCHAR(191) NOT NULL,
    `adharCardPath` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BankDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bankName` VARCHAR(191) NOT NULL,
    `accountNumber` VARCHAR(191) NOT NULL,
    `accountType` ENUM('SAVINGS', 'CURRENT', 'FIXED') NOT NULL DEFAULT 'SAVINGS',
    `branchName` VARCHAR(191) NOT NULL,
    `ifscCode` VARCHAR(191) NOT NULL,
    `micrCode` VARCHAR(191) NOT NULL,
    `chequeCopyPath` VARCHAR(191) NOT NULL,
    `firstHolderId` INTEGER NULL,

    UNIQUE INDEX `BankDetails_firstHolderId_key`(`firstHolderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nominee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `panNumber` VARCHAR(191) NOT NULL,
    `relationship` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `allocationPrecent` DOUBLE NOT NULL DEFAULT 100,
    `firstHolderId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BankDetails` ADD CONSTRAINT `BankDetails_firstHolderId_fkey` FOREIGN KEY (`firstHolderId`) REFERENCES `FirstHolder`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Nominee` ADD CONSTRAINT `Nominee_firstHolderId_fkey` FOREIGN KEY (`firstHolderId`) REFERENCES `FirstHolder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
