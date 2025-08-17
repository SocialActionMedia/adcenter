'use client';

import React, { useState } from 'react';
import CampaignCard from '@/components/CampaignCard';
import { 
  AdCampaign, 
  CampaignStatus, 
  AdGroup, 
  Ad, 
  AdContent, 
  CampaignMetrics, 
  TargetAudience, 
  Demographics,
  TargetingCriteria,
  AdGroupMetrics,
  AdMetrics
} from '@/types';

// Sample data to demonstrate the types
const sampleCampaigns: AdCampaign[] = [
  {
    id: '1',
    name: 'Summer Sale Campaign',
    description: 'Promote summer products with special discounts',
    status: 'active',
    budget: 5000,
    spent: 1250,
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-08-31'),
    targetAudience: {
      ageRange: [18, 45],
      locations: ['United States', 'Canada'],
      interests: ['fashion', 'shopping', 'summer'],
      demographics: {
        gender: 'all',
        income: 'medium',
        education: 'college'
      }
    },
    adGroups: [
      {
        id: 'ag1',
        name: 'Summer Fashion',
        status: 'active',
        ads: [
          {
            id: 'ad1',
            name: 'Summer Dress Ad',
            type: 'image',
            status: 'active',
            content: {
              headline: 'Summer Dresses Up to 50% Off',
              description: 'Get ready for summer with our latest collection',
              imageUrl: '/images/summer-dress.jpg',
              callToAction: 'Shop Now',
              displayUrl: 'example.com/summer-dresses'
            },
            destination: 'https://example.com/summer-dresses',
            performance: {
              impressions: 15000,
              clicks: 450,
              ctr: 0.03,
              cpc: 2.50,
              conversions: 23,
              conversionRate: 0.051,
              qualityScore: 8
            },
            createdAt: new Date('2024-06-01'),
            updatedAt: new Date('2024-06-15')
          }
        ],
        keywords: ['summer dress', 'summer fashion', 'dress sale'],
        bidAmount: 2.50,
        targeting: {
          locations: ['United States'],
          languages: ['English'],
          devices: ['desktop', 'mobile']
        },
        performance: {
          impressions: 15000,
          clicks: 450,
          ctr: 0.03,
          cpc: 2.50,
          conversions: 23,
          conversionRate: 0.051
        }
      }
    ],
    metrics: {
      impressions: 15000,
      clicks: 450,
      ctr: 0.03,
      cpc: 2.50,
      cpm: 25.00,
      conversions: 23,
      conversionRate: 0.051,
      costPerConversion: 54.35,
      revenue: 1250,
      roas: 1.0
    },
    createdBy: 'user1',
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-06-15')
  },
  {
    id: '2',
    name: 'Back to School',
    description: 'Target students and parents for back to school season',
    status: 'draft',
    budget: 3000,
    spent: 0,
    startDate: new Date('2024-08-15'),
    endDate: new Date('2024-09-30'),
    targetAudience: {
      ageRange: [6, 18],
      locations: ['United States'],
      interests: ['education', 'school supplies', 'back to school'],
      demographics: {
        gender: 'all',
        income: 'all',
        education: 'high_school'
      }
    },
    adGroups: [],
    metrics: {
      impressions: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conversions: 0,
      conversionRate: 0,
      costPerConversion: 0,
      revenue: 0,
      roas: 0
    },
    createdBy: 'user1',
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-07-01')
  }
];

export default function DemoPage() {
  const [campaigns, setCampaigns] = useState<AdCampaign[]>(sampleCampaigns);

  const handleEdit = (campaign: AdCampaign) => {
    console.log('Edit campaign:', campaign);
    // In a real app, this would open an edit modal or navigate to edit page
  };

  const handleDelete = (campaignId: string) => {
    setCampaigns(prev => prev.filter(c => c.id !== campaignId));
  };

  const handleStatusChange = (campaignId: string, newStatus: CampaignStatus) => {
    setCampaigns(prev => 
      prev.map(c => 
        c.id === campaignId 
          ? { ...c, status: newStatus, updatedAt: new Date() }
          : c
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">TypeScript Types Demo</h1>
          <p className="mt-2 text-lg text-gray-600">
            This page demonstrates the TypeScript interfaces and types defined for the Ad Center application.
          </p>
        </div>

        {/* Type Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900">Core Entities</h3>
              <ul className="text-sm text-blue-800 mt-2 space-y-1">
                <li>• AdCampaign</li>
                <li>• AdGroup</li>
                <li>• Ad</li>
                <li>• User</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-medium text-green-900">Metrics & Analytics</h3>
              <ul className="text-sm text-green-800 mt-2 space-y-1">
                <li>• CampaignMetrics</li>
                <li>• AdGroupMetrics</li>
                <li>• AdMetrics</li>
                <li>• Budget</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-medium text-purple-900">Utility Types</h3>
              <ul className="text-sm text-purple-800 mt-2 space-y-1">
                <li>• Optional&lt;T, K&gt;</li>
                <li>• MakeRequired&lt;T, K&gt;</li>
                <li>• DeepPartial&lt;T&gt;</li>
                <li>• ApiResponse&lt;T&gt;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Campaigns Display */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Campaigns</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </div>

        {/* Type Examples */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Type Usage Examples</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Creating a Campaign</h3>
              <pre className="text-sm text-gray-700 bg-white p-3 rounded border overflow-x-auto">
{`const newCampaign: AdCampaign = {
  id: '3',
  name: 'New Campaign',
  status: 'draft',
  budget: 1000,
  spent: 0,
  startDate: new Date(),
  endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  // ... other required properties
};`}
              </pre>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Using Utility Types</h3>
              <pre className="text-sm text-gray-700 bg-white p-3 rounded border overflow-x-auto">
{`// Make budget optional
type CampaignWithoutBudget = Optional<AdCampaign, 'budget'>;

// Make all properties optional
type PartialCampaign = DeepPartial<AdCampaign>;

// API response wrapper
type CampaignResponse = ApiResponse<AdCampaign>;`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
