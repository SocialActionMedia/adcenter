'use client';

import React from 'react';
import { AdCampaign, CampaignStatus, CAMPAIGN_STATUSES } from '@/types';

interface CampaignCardProps {
  campaign: AdCampaign;
  onEdit?: (campaign: AdCampaign) => void;
  onDelete?: (campaignId: string) => void;
  onStatusChange?: (campaignId: string, status: CampaignStatus) => void;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  campaign,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const getStatusColor = (status: CampaignStatus) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'draft':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'archived':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${(value * 100).toFixed(2)}%`;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(new Date(date));
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
          {campaign.description && (
            <p className="text-sm text-gray-600 mt-1">{campaign.description}</p>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(
              campaign.status
            )}`}
          >
            {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Campaign Details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500">Budget</p>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(campaign.budget)}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Spent</p>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(campaign.spent)}
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Start Date</p>
          <p className="text-sm text-gray-900">{formatDate(campaign.startDate)}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">End Date</p>
          <p className="text-sm text-gray-900">{formatDate(campaign.endDate)}</p>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="border-t border-gray-200 pt-4 mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Performance</h4>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-gray-500">CTR</p>
            <p className="text-sm font-semibold text-gray-900">
              {formatPercentage(campaign.metrics.ctr)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">CPC</p>
            <p className="text-sm font-semibold text-gray-900">
              {formatCurrency(campaign.metrics.cpc)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Conversions</p>
            <p className="text-sm font-semibold text-gray-900">
              {campaign.metrics.conversions.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Ad Groups Summary */}
      <div className="border-t border-gray-200 pt-4 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Ad Groups: {campaign.adGroups.length}
          </span>
          <span className="text-sm text-gray-500">
            {campaign.adGroups.filter(ag => ag.status === 'active').length} active
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          {onEdit && (
            <button
              onClick={() => onEdit(campaign)}
              className="px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
            >
              Edit
            </button>
          )}
          {onStatusChange && (
            <select
              value={campaign.status}
              onChange={(e) => onStatusChange(campaign.id, e.target.value as CampaignStatus)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {CAMPAIGN_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </option>
              ))}
            </select>
          )}
        </div>
        {onDelete && (
          <button
            onClick={() => onDelete(campaign.id)}
            className="px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default CampaignCard;
