enum ProviderRequestStatus {
  INITIATED,
  IN_REVIEW,
  REJECTED,
  APPROVED,
}

enum ProviderApprovalStatus {
}

export interface Provider {
  id: string;
  name: string;
  phoneNumber: string;
  emailAddress: string;
  location: string;
  state: string;
  town: string;
  country: string;
  requestStatus: ProviderRequestStatus;
  yearOfIncorporation: string;
  registrationNumber: string;
  hoursOfOperation: string;
  contactPersonFirstName: string;
  contactPersonMiddleName: string;
  contactPersonLastName: string;
  contactPersonEmailAddress: string;
  mdFirstName: string;
  mdLastName: string;
  mdMiddleName: string;
  mdPhoneNumber: string;
  professionalIndemnityCoverUrl: string;
  dateModified: string;
  modifiedBy: string;
  approvedStatus: ProviderApprovalStatus;
  approvalDate: string;
  approvedBy: string;
  declineReason: string;
  expiresOn: string;
  practiceType: string;
  owners: [];
}