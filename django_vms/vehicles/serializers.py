from rest_framework import serializers
from .models import Vehicle, FuelingService, MaintenanceService

class VehicleSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Vehicle
        fields = '__all__'
