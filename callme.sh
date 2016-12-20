#!/usr/bin/env bash

ACCOUNT_ID="5678c1a440307c529ceb66c5"
API_KEY="61b17c2f33834c429ac53a2f8a1ff333"
APP_ID="5678f0ee40307c6728f60c4b"
BASE_URL="http://api.fonoster.com/v1"
APPS_URL="$BASE_URL/accounts/$ACCOUNT_ID/apps"
CALLS_URL="$BASE_URL/accounts/$ACCOUNT_ID/calls"
FROM_NUMBER='+18296072077'
TO_NUMBER=$1

if [ $# -lt 2 ]
then
    echo "usage: $0 'the number to call in E.164 format(i.e: +18092614323)' 'text to send'"
    exit
fi

echo "Sending call to number $TO_NUMBER and message '$2'"

# Update app
curl -H "Content-Type: application/json" -XPOST -u "$ACCOUNT_ID:$API_KEY" $APPS_URL --data "{\"id\":\"$APP_ID\", \"name\":\"testapp\", \"script\":\"say('$2');\"}" --silent

# Place call
curl -H "Content-Type: application/json" -XPOST -u "$ACCOUNT_ID:$API_KEY" $CALLS_URL --data "{\"appId\":\"$APP_ID\", \"from\":\"$FROM_NUMBER\", \"to\":\"$TO_NUMBER\"}" --silent
