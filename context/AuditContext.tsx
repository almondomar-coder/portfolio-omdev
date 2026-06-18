import React, { createContext, useContext } from 'react';

type AuditContextType = {
  openAudit: (e?: React.MouseEvent) => void;
};

const AuditContext = createContext<AuditContextType>({ openAudit: () => {} });

export const useAudit = () => useContext(AuditContext);
export const AuditProvider = AuditContext.Provider;
