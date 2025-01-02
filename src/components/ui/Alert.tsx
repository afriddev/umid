import { FC, ReactNode } from 'react';
import { Card } from '@nextui-org/react';
import clsx from 'clsx';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  type?: AlertType;
  message: string;
  icon?: ReactNode;
  className?: string;
}

const alertStyles: Record<AlertType, string> = {
  success: 'bg-green-100 text-green-700 border-green-300',
  error: 'bg-red-100 text-red-700 border-red-300',
  warning: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  info: 'bg-blue-100 text-blue-700 border-blue-300',
};

const Alert: FC<AlertProps> = ({ type = 'info', message, icon, className }) => {
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
    </Card>
  );
};

export default Alert;
