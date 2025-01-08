import { FC, ReactNode } from 'react';
import { Card } from '@nextui-org/react';
import clsx from 'clsx';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  type?: AlertType;
  message: string;
  icon?: ReactNode;
  className?: string;
  onClose: () => void;
}

const alertStyles: Record<AlertType, string> = {
  success: 'bg-green-100 text-green-700 border-green-300',
  error: 'bg-red-100 text-red-700 border-red-300',
  warning: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  info: 'bg-blue-100 text-blue-700 border-blue-300',
};

const Alert: FC<AlertProps> = ({ type = 'info', message, icon, className , onClose }) => {
  
  return (
    <Card
      className={clsx(
        'p-4 rounded-lg border',
        alertStyles[type],
        className
      )}
    >
      <div className="flex items-center space-x-3">
        {icon && <div className="text-lg">{icon}</div>}
        <span className="font-medium">{message}</span>
      </div>
      <button onClick={onClose} className="ml-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
    </Card>
  );
};

export default Alert;
